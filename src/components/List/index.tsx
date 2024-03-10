type ListProps = {
  courts: {
    id: number;
    court_name: string;
    url: string;
    last_changed: string;
  }[];
};

const List: React.FC<ListProps> = ({ courts }) => {
  return <div>Test</div>;
};

export default List;
