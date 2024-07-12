export type Image = {
  data: {
    id: number;
    attributes: {
      name: string;
      width: number;
      height: number;
      url: string;
    };
  };
};
