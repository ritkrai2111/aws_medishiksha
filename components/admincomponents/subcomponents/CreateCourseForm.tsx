import {StorageManager} from "@aws-amplify/ui-react-storage";

export default function CreateCourseForm(){
  return (
    <>
    <StorageManager
    accessLevel="public"
    acceptedFileTypes={['video/*']}
    maxFileCount={5}
    >

    </StorageManager>
    </>
  )
}