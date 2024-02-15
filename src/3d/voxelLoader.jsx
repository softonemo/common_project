import { forwardRef } from 'react';
import './voxelStyles.css';

export const Spinner = () => <div className="dog-spinner"></div>;

export const Container = forwardRef(({ children }, ref) => (
  <div ref={ref} className="voxel-dog">
    {children}
  </div>
));

const Loader = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loader;
