import Input from '../components/Input'

export default function CreateProject() {
  return (
    <div className='w-3/4'>
        <h2>Create Project</h2>
        <Input isTextarea={false} label={'TITLE'} type={'text'} />
        <Input isTextarea={true} label={'DESCRIPTION'} type={'text'} />
        <Input isTextarea={false} label={'DUE DATE'} type={'date'} />
    </div>
  );
}