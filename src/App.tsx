import { DesignSolution } from "./components/DesignSolution";
import { MySocials } from "./components/MySocials";
import { Profile } from "./components/Profile";

export const App = () => {
  return (
    <div className="flex min-h-[100vh] min-w-[90vw] flex-col justify-center gap-5 bg-background md:flex-row">
      <Profile />
      <div className="mt-16 flex flex-col items-start justify-center gap-9 md:ml-24 md:mr-20">
        <DesignSolution />
        <MySocials />
      </div>
    </div>
  );
};
