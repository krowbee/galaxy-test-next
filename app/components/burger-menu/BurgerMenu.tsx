import { BurgerProvider } from "./BurgerProvider";
import { MenuButton } from "./MenuButton";
import { BurgerMenuContent } from "./BurgerMenuContent";

export function BurgerMenu() {
  return (
    <BurgerProvider>
      <MenuButton />
      <BurgerMenuContent />
    </BurgerProvider>
  );
}
