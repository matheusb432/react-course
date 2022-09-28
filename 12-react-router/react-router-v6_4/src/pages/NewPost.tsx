import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData() as any;

  function cancelHandler() {
    navigate('/blog');
  }

  return (
    <>
      {/* NOTE This will handle any error thrown in savePost() if it's status is 422 */}
      {!!data?.status && <p>{data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === 'submitting'}
      />
    </>
  );
}

export default NewPostPage;

// NOTE The action from NewPostForm is handled here
export async function action({ request }: any) {
  const formData = await request.formData();

  const post = {
    title: formData.get('title'),
    body: formData.get('post-text'),
  };

  try {
    await savePost(post);
  } catch (err: any) {
    if (err.status === 422) {
      return err;
    }

    throw err;
  }

  return redirect('/blog');
}
