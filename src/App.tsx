import { DesignSolution } from "./components/DesignSolution";
import { MySocials } from "./components/MySocials";
import { Profile } from "./components/Profile";

export const App = () => {
  return (
    <div className="flex min-h-[100vh] flex-col justify-center bg-background md:flex-row">
      <Profile />
      <div className="mt-20 flex w-[73%] flex-col items-center justify-center gap-9 md:mr-20">
        <DesignSolution />
        <MySocials />
      </div>
    </div>
  );
};
