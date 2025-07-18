import { AttendeeList, Header } from "./components";

export function App() {
  return (
    <div className="max-w-7xl mx-auto py-5 flex flex-col gap-5">
      <Header />
      <AttendeeList />
    </div>
  )
}

