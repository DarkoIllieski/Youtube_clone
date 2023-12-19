import { PageHeader } from "./layouts/PageHeader.tsx";
import CategoryPills from "./components/CategoryPills.tsx";
function App() {
  return (
    <div>
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
        <div>Sidebar</div>
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills />
        </div>
      </div>
    </div>
  );
}

export default App;
