import { ListItem, ListItemProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledListItem = styled(ListItem)<ListItemProps>(({ theme }) => ({
    '& .MuiListItemText-secondary': {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    }
}))
