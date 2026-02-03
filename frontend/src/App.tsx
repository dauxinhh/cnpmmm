import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import HomeLanding from "./pages/HomeLanding";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";

import Dashboard from "./pages/talent/Dashboard";
import SystemConfig from "./pages/talent/SystemConfig";
import AppConfig from "./pages/talent/AppConfig";
import JwtSession from "./pages/talent/JwtSession";

import UserManage from "./pages/talent/UserManage";
import Role from "./pages/talent/Role";
import Permission from "./pages/talent/Permission";
import UnlockAccount from "./pages/talent/UnlockAccount";

import ExcelTemplate from "./pages/talent/ExcelTemplate";
import UploadTemplate from "./pages/talent/UploadTemplate";
import UpdateTemplate from "./pages/talent/UpdateTemplate";
import DeleteTemplate from "./pages/talent/DeleteTemplate";

import TalentPortal from "./pages/talentdashboard/TalentPortal";
import StudentProfile from "./pages/talentdashboard/StudentProfile";

import Projects from "./pages/talentdashboard/Projects";
import JoinRequest from "./pages/talentdashboard/JoinRequest";
import ProjectTasks from "./pages/talentdashboard/ProjectTasks";

import LeaderHub from "./pages/talentdashboard/LeaderHub";
import FundSplit from "./pages/talentdashboard/FundSplit";
import PerformanceReport from "./pages/talentdashboard/PerformanceReport";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<HomeLanding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<Forgot />} />

      <Route path="/talent" element={<Dashboard />} />
      <Route path="/talent/settings" element={<SystemConfig />} />
      <Route path="/talent/settings/app" element={<AppConfig />} />
      <Route path="/talent/settings/jwt" element={<JwtSession />} />

      <Route path="/talent/users" element={<UserManage />} />
      <Route path="/talent/users/role" element={<Role />} />
      <Route path="/talent/users/permission" element={<Permission />} />
      <Route path="/talent/users/unlock" element={<UnlockAccount />} />

      <Route path="/talent/templates" element={<ExcelTemplate />} />
      <Route path="/talent/templates/upload" element={<UploadTemplate />} />
      <Route path="/talent/templates/update" element={<UpdateTemplate />} />
      <Route path="/talent/templates/delete" element={<DeleteTemplate />} />
      <Route path="/talent" element={<TalentPortal />} />
      <Route path="/talent/profile" element={<StudentProfile />} />
      <Route path="/talent/projects" element={<Projects />} />
      <Route path="/talent/projects/:id/join" element={<JoinRequest />} />
      <Route path="/talent/projects/tasks" element={<ProjectTasks />} />
      <Route path="/talent/leader" element={<LeaderHub />} />
      <Route path="/talent/leader/fund" element={<FundSplit />} />
      <Route path="/talent/leader/report" element={<PerformanceReport />} />

  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
  );
}
