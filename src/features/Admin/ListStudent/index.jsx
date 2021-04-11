import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../../components/Layout'

import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { removeStudent } from '../../Admin/StudentSlice';
import ItemStudent from './ItemStudent';


ListStudent.propTypes = {
    
};

function ListStudent(props) {
    const dispatch = useDispatch();
    const students = useSelector(state => state.students);
    const history = useHistory();

    // const handleStudentEditClick = (student) => {
    //     console.log('Edit: ', student);
    //     const editPhotoUrl = `/students/${student.id}`;
    //     history.push(editPhotoUrl);
    //   }
    
      const handleStudentRemoveClick = (student) => {
        const removeStudentId = student.id;
        const action = removeStudent(removeStudentId);
        dispatch(action);
        alert('xoa');
      }



    return (
        <>
            <Layout >
            <h1 className='text-center'>List Student</h1>
            <section className="content">
            {/* Default box */}
            <table className="table table-striped projects" >
                    <thead>
                    <tr>
                        <th style={{width: '10%'}}>
                        ID
                        </th>
                        <th style={{width: '20%'}}>
                         Name
                        </th>
                        <th style={{width: '20%'}} >
                        Email
                        </th>
                        <th style={{width: '20%'}} >
                        Phone Number
                        </th>
                        <th style={{width: '30%'}} className='text-center'>
                        Action
                        </th>
                    </tr>
                    </thead>

                    <tbody>
            {students.map(student => (
                    <ItemStudent
                    student={student}
                    onRemoveClick={handleStudentRemoveClick}


                    />
                    
                    
            ))}
            </tbody>
            </table>    


            {/* /.card */}
        </section>
        </Layout>
        </>
    );
}

export default ListStudent;