import {Button} from '@/components/ui/button';
import {ThemeButtonProps} from '@/interfaces/general';

const ThemeButton = ({btnText, onClick, className}: ThemeButtonProps) => {
  return (
    <Button variant="outline" onClick={onClick} className={className}>
      {btnText}
    </Button>
  );
};

export default ThemeButton;
