
import Layout from "./layout/layout";
import ChoosePsychotherapistButton from "./choose-psychotherapist-button/choose-psychotherapist-button";
import SignInButton from "./signin-button/signin-button";
import GoBackButton from "./go-back-button/go-back-button";

interface Props {
  variant: HeaderVariants;
}

export default function Header({ variant }: Props) {
  return (
    <Layout 
      variant={variant}
      slots={{
        signin: <SignInButton/>,
        goBack: <GoBackButton/>,
        choosePsychotherapist: <ChoosePsychotherapistButton/>
      }}
    />
  );
}
