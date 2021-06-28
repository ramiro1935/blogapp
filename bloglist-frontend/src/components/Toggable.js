import React, { useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@components/atoms/Button'

const Toggable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hidenWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibilty = () => setVisible(!visible)

  useImperativeHandle(ref, () => {
    return {
      toggleVisibilty,
    }
  })

  return (
    <div>
      <div id='show' style={hidenWhenVisible}>
        <Button
          onClick={toggleVisibilty}
          type='success'
          value={props.buttonLabel}
        />
      </div>
      <div id='hidden' style={showWhenVisible}>
        {props.children}
        <Button onClick={toggleVisibilty} value={'cancel'} />
      </div>
    </div>
  )
})

Toggable.displayName = 'Toggable'

Toggable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}
export default Toggable
