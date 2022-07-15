import React, { useState } from "react";

let parentData = [
  {
    std_id: 0,
    std: 34,
    student: [
      {
        student_id: 0,
        name: "Georgina Goodwin"
      },
      {
        student_id: 1,
        name: "Lucille Curtis"
      },
      {
        student_id: 2,
        name: "Hall Rosa"
      }
    ]
  },
  {
    std_id: 1,
    std: 30,
    student: [
      {
        student_id: 0,
        name: "Carlson Moss"
      },
      {
        student_id: 1,
        name: "Sims Padilla"
      },
      {
        student_id: 2,
        name: "Ferrell Daniel"
      }
    ]
  },
  {
    std_id: 2,
    std: 33,
    student: [
      {
        student_id: 0,
        name: "Margo Byers"
      },
      {
        student_id: 1,
        name: "Armstrong Wilkerson"
      },
      {
        student_id: 2,
        name: "Parks Stephenson"
      }
    ]
  },
  {
    std_id: 3,
    std: 34,
    student: [
      {
        student_id: 0,
        name: "Skinner Cain"
      },
      {
        student_id: 1,
        name: "Elsie Blankenship"
      },
      {
        student_id: 2,
        name: "Mcintyre Copeland"
      }
    ]
  },
  {
    std_id: 4,
    std: 34,
    student: [
      {
        student_id: 0,
        name: "Tucker Duffy"
      },
      {
        student_id: 1,
        name: "Carla Wolf"
      },
      {
        student_id: 2,
        name: "Leanna Pickett"
      }
    ]
  },
  {
    std_id: 5,
    std: 34,
    student: [
      {
        student_id: 0,
        name: "Mejia Colon"
      },
      {
        student_id: 1,
        name: "Marian Ballard"
      },
      {
        student_id: 2,
        name: "Acosta Montgomery"
      }
    ]
  },
  {
    std_id: 6,
    std: 37,
    student: [
      {
        student_id: 0,
        name: "Shana Dyer"
      },
      {
        student_id: 1,
        name: "Augusta Bullock"
      },
      {
        student_id: 2,
        name: "Freda Hyde"
      }
    ]
  }
];

for (let i = 0; i < parentData.length; i++) {
  let obj = parentData[i];
  obj.std_id_flag = false;
  let childlength = parentData[i].student.length;
  for (let j = 0; j < childlength; j++) {
    let childObj = parentData[i].student[j];
    childObj.studentFlag = false;
  }
}
function Student() {
  const [data, setData] = useState(parentData);
  function handleSelectParent(id) {
    let array = data;
    for (let i = 0; i < array.length; i++) {
      if (array[i].std_id === id) {
        array[i].std_id_flag = !array[i].std_id_flag;
      }
    }
    for (let j = 0; j < array[id].student.length; j++) {
      array[id].student[j].studentFlag = !array[id].student[j].studentFlag;
    }
    setData([...array]);
  }

  function handleSelectChild(childIndex, parentIndex) {
    let array = data;
    for (let i = 0; i < array.length; i++) {
      if (array[i].std_id === parentIndex) {
        let studentFlagCount = 0;
        for (let j = 0; j < array[i].student.length; j++) {
          if (childIndex === array[i].student[j].student_id) {
            array[i].student[j].studentFlag = !array[i].student[j].studentFlag;
          }
          if (array[i].student[j].studentFlag) {
            studentFlagCount = studentFlagCount + 1;
          }
        }
        if (array[parentIndex].student.length === studentFlagCount) {
          array[parentIndex].std_id_flag = !array[parentIndex].std_id_flag;
        } else {
          array[parentIndex].std_id_flag = false;
        }
      }
    }
    setData([...array]);
  }
  return (
    <div>
      {data &&
        data.map((item, index) => {
          return (
            <div key={`parent${index}`}>
              <input
                type="checkbox"
                checked={item.std_id_flag}
                onClick={() => handleSelectParent(item.std_id)}
              />{" "}
              {item.std_id}
              {item.student.map((stu) => {
                return (
                  <div>
                    <input
                      type="checkbox"
                      checked={stu.studentFlag}
                      onClick={() =>
                        handleSelectChild(stu.student_id, item.std_id)
                      }
                    />
                    {stu.name}
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}

export default Student;
