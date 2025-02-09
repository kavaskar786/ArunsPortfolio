import { DesignSolution } from "./components/DesignSolution";
import { MySocials } from "./components/MySocials";
import { Profile } from "./components/Profile";

export const App = () => {
  return (
    <div className="flex min-h-[100vh] flex-col justify-center gap-5 bg-background md:flex-row">
      <Profile />
      <div className="ml-24 mt-20 flex flex-col items-start justify-center gap-9 md:mr-20">
        <DesignSolution />
        <MySocials />
      </div>
    </div>
  );
};
