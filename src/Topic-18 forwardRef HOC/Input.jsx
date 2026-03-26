import {forwardRef} from 'react'

const Input = (props,ref) => {
  return <input ref={ref} type={props.type} placeholder={props.placeholder} name={props.name} />
}


export default forwardRef(Input);




/**
 * ! React 19

const Input = ({ref,...props}) => {
  return    <input ref={ref} type={props.type} placeholder={props.placeholder} name={props.name} />
}
export default Input;
 */
