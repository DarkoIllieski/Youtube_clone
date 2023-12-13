import logo from "../assets/logo.png"
import { Menu, Upload } from "lucide-react"
import Button  from "../components/Button"

const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="./">
          <img src={logo} className="h-6"></img>
        </a>
      </div>
      <div></div>
      <div>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
