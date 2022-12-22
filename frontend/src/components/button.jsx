import React from 'react'
import Button from '@mui/material/Button';

export default function button(props) {
  return (
    <div>
            <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {props.name}
              </Button>
        </div>
  )
}
