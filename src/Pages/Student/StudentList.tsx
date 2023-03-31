import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {};

const StudentList = (props: Props) => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex mt-2 justify-content-between">
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search Student..."
          className="border px-2 rounded"
        />
        <Link to={"/students/student-add"} className="btn btn-outline-primary">
          Add Student
        </Link>
      </div>
      <Table striped hover size="sm" className="mt-2">
        <thead>
          <tr>
            <th>Admission No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <div className="d-flex">
                <a href="#" className="text-decoration-none me-2">
                  Edit
                </a>
                <a href="#" className="text-decoration-none me-2">
                  Delete
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <div className="d-flex">
                <a href="#" className="text-decoration-none me-2">
                  Edit
                </a>
                <a href="#" className="text-decoration-none me-2">
                  Delete
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>
              <div className="d-flex">
                <a href="#" className="text-decoration-none me-2">
                  Edit
                </a>
                <a href="#" className="text-decoration-none me-2">
                  Delete
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
