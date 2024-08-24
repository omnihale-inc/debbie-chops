type Positions = {
  home: number;
  about: number;
  menu: number;
  order: number;
};
interface OnSetPositions {
  onSetPositions?: React.Dispatch<React.SetStateAction<Positions>>;
}

interface NavigationProps {
  positions: Positions;
}

interface Item {
  image: string;
  title: string;
  description: string;
  amout: string;
}

interface MenuProps extends OnSetPositions {
  menu: Item[];
}

interface AboutProps extends OnSetPositions {}

interface BrandProps extends OnSetPositions {}

interface OrderProps extends OnSetPositions {}

interface HomeProps extends OnSetPositions {}

interface StartupProps extends OnSetPositions {}

interface ServicesProps extends OnSetPositions {}

interface TestimonialsProps extends OnSetPositions {}

export type {
  Positions,
  Item,
  AboutProps,
  BrandProps,
  OrderProps,
  HomeProps,
  StartupProps,
  ServicesProps,
  TestimonialsProps,
  NavigationProps,
  MenuProps,
};
