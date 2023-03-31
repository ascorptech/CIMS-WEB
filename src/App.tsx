import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.scss'
const LoginPage = lazy(()=>import("@Pages/Login/Login"));
const DashboardPage = lazy(()=>import("@Pages/Dashboard/Dashboard"));
const DashboardOverviewPage = lazy(()=>import("@Pages/Dashboard/DashboardOverview"));
const StudentPage = lazy(()=>import("@Pages/Student/Student"));
const StudentListPage = lazy(()=>import("@Pages/Student/StudentList"));
const StudentCreatePage = lazy(()=>import("@Pages/Student/StudentAdd"));
const EmployeePage = lazy(()=>import("@Pages/Employee/Employee"));
const EmployeeListPage = lazy(()=>import("@Pages/Employee/EmployeeList"));
const AttendencePage = lazy(()=>import("@Pages/Attendence/Attendence"));
const BatchesPage = lazy(()=>import("@Pages/Batches/Batches"));
const CoursesPage = lazy(()=>import("@Pages/Courses/Courses"));
const PaymentsPage = lazy(()=>import("@Pages/Payments/Payments"));
const ContactPage = lazy(()=>import("@Pages/Contact/Contact"));
const ProfilePage = lazy(()=>import("@Pages/Profile/Profile"));
const ChangePasswordPage = lazy(()=>import("@Pages/ChangePassword/ChangePassword"));

const App=()=> {
  const routes = useRoutes([
    { path: '/', element: <LoginPage/> },
    { path: '/dashboard', element: <DashboardPage/>,children:[
      { path: '', element: <DashboardOverviewPage/> },
    ] },
    { path: '/students', element: <StudentPage/>,children:[
      { path: '', element: <StudentListPage/> },
      { path: 'student-add', element: <StudentCreatePage/> },
    ] },
    { path: '/employees', element: <EmployeePage/>,children:[
      { path: '', element: <EmployeeListPage/> },
    ] },
    { path: '/attendence', element: <AttendencePage/>,children:[
      // { path: '', element: <EmployeeListPage/> },
    ] },
    { path: '/batches', element: <BatchesPage/>,children:[
      // { path: '', element: <EmployeeListPage/> },
    ] },
    { path: '/courses', element: <CoursesPage/>,children:[
      // { path: '', element: <EmployeeListPage/> },
    ] },
    { path: '/payments', element: <PaymentsPage/>,children:[
      // { path: '', element: <EmployeeListPage/> },
    ] },
    { path: '/contact', element: <ContactPage/>},
    { path: '/profile', element: <ProfilePage/>},
    { path: '/change-password', element: <ChangePasswordPage/>},
  ])
  return (
   <>
   <Suspense fallback='Loading...'>{routes}</Suspense>
   </>
  )
}

export default App
