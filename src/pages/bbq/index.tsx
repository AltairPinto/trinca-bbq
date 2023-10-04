import { BBQLayout } from 'components/Layouts/BBQLayout';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { HomeScreen } from 'features/BBQ/BBQScreens/HomeScreen';

const PageBBQ = () => {
  return (
    <ProtectedRoute>
      <HomeScreen />
    </ProtectedRoute>
  );
};

PageBBQ.Layout = BBQLayout;

export default PageBBQ;
