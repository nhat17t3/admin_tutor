import { createSlice } from '@reduxjs/toolkit';

const initialStudents = [
  {
    id: 1,
    name: 'Hoang Long Nhat',
    email: 'nhat@gmail.com',
    phonenumber: 84369621657 ,
    password: '123456789'
  },
  {
    id: 2,
    name: 'Hoang Long Nhat',
    email: 'nhat@gmail.com',
    phonenumber: 84369621657 ,
    password: '123456789'
  },
  {
    id: 4,
    name: 'Hoang Long Nhat',
    email: 'nhat@gmail.com',
    phonenumber: 84369621657 ,
    password: '123456789'
  },
  {
    id: 5,
    name: 'Hoang Long Nhat',
    email: 'nhat@gmail.com',
    phonenumber: 84369621657 ,
    password: '123456789'
  },
  {
    id: 6,
    name: 'Hoang Long Nhat',
    email: 'nhat@gmail.com',
    phonenumber: 84369621657 ,
    password: '123456789'
  },
  {
    id: 7,
    name: 'Hoang Long Nhat',
    email: 'nhat@gmail.com',
    phonenumber: 84369621657 ,
    password: '123456789'
  },
  {
    id: 8,
    name: 'Hoang Long Nhat',
    email: 'nhat@gmail.com',
    phonenumber: 84369621657 ,
    password: '123456789'
  },
  {
    id: 10,
    name: 'Hoang Long Nhat',
    email: 'nhat@gmail.com',
    phonenumber: 84369621657 ,
    password: '123456789'
  },
  {
    id: 11,
    name: 'Hoang Long Nhat',
    email: 'nhat@gmail.com',
    phonenumber: 84369621657 ,
    password: '123456789'
  },
  {
    id: 13,
    name: 'Hoang Long Nhat',
    email: 'nhat@gmail.com',
    phonenumber: 84369621657 ,
    password: '123456789'
  },
  {
    id: 15,
    name: 'Hoang Long Nhat',
    email: 'nhat@gmail.com',
    phonenumber: 84369621657 ,
    password: '123456789'
  },
  {
    id: 16,
    name: 'Hoang Long Nhat',
    email: 'nhat@gmail.com',
    phonenumber: 84369621657 ,
    password: '123456789'
  },
];

const student = createSlice({
  name: 'students',
  initialState: initialStudents,
  reducers: {
    addStudent: (state, action) => {
      // const newPhoto = action.payload;
      state.push(action.payload);
    },
    removeStudent: (state, action) => {
      // console.log(action.payload);
      const removeStudentId = action.payload;
      return state.filter(student => student.id !== removeStudentId);
    },
    updateStudent: (state, action) => {
      const newStudent = action.payload;
      const studentIndex = state.findIndex(student => student.id === newStudent.id);

      if (studentIndex >= 0) {
        state[studentIndex] = newStudent;
      }
    }
  }
});

const { reducer, actions } = student;
export const { addStudent, removeStudent, updateStudent } = actions;
export default reducer;