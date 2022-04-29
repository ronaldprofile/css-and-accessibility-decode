import { ButtonWithStitches } from "../components/Button/WithStitches";
import { ButtonWithStyled } from "../components/Button/WithStyledComponents";
import { ButtonWithTailwind } from "../components/Button/WithTailwindCSS";

export function Home() {
  return (
    <div className={`w-screen p-8 `}>
      <h2 className={`mb-8  text-3xl font-bold text-white/95`}>
        The new best way to do CSS
      </h2>

      <div className={`grid grid-cols-3 gap-4`}>
        <ButtonWithStyled />
        <ButtonWithTailwind />
        <ButtonWithStitches />
      </div>
    </div>
  );
}
