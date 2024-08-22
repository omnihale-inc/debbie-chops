type Positions = {
  home: number;
  about: number;
  menu: number;
  contact: number;
};
interface NavigationProps {
  positions: Positions;
}

interface OnSetPositions {
  onSetPositions: React.Dispatch<React.SetStateAction<Positions>>;
}

interface AboutProps extends OnSetPositions {}

interface BrandProps extends OnSetPositions {}

interface ContactProps extends OnSetPositions {}

interface HomeProps extends OnSetPositions {}

interface StartupProps extends OnSetPositions {}

interface ServicesProps extends OnSetPositions {}

interface TestimonialsProps extends OnSetPositions {}

export type {
  Positions,
  AboutProps,
  BrandProps,
  ContactProps,
  HomeProps,
  StartupProps,
  ServicesProps,
  TestimonialsProps,
  NavigationProps,
};
