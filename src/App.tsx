import React, { memo, useState, useMemo } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const ARRAY: number[] = Array.from(Array(10).keys())

function App(): React.ReactElement {
  // States
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [parent, setParent] = useState<null | number>(0)
  const [checked, setChecked] = useState<boolean>(false)
  const open = Boolean(anchorEl)

  // Functions
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (parent: number) => () => {
    setParent(parent)
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    setAnchorEl(null)
  }

  // View
  const childrenList = useMemo(
    () => (
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={handleChange} />}
          label={parent}
        />
      </FormGroup>
    ),
    [parent, checked]
  )

  // Main
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        nested select
      </Button>
      <Menu
        id="basic-menu"
        classes={{ paper: 'NESTED_SELECT', list: 'NESTED_LIST' }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <Paper classes={{ root: '__LIST_PAPER__ __LEFT__' }}>
          {ARRAY.map((a) => (
            <MenuItem key={a} onClick={handleClose(a)}>
              {a}
            </MenuItem>
          ))}
        </Paper>
        <Paper classes={{ root: '__LIST_PAPER__ __RIGHT__' }}>
          {childrenList}
        </Paper>
      </Menu>
    </div>
  )
}

export default memo(App)
