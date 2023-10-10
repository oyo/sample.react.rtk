import { useSelector } from 'react-redux'
import { notifySelector } from 'features/control/notify'
import { PageSnackbar, PageSnackbarStack } from '@catena-x/portal-shared-components'

const Notify = () => {
  const notifications = useSelector(notifySelector)
  return (
    <PageSnackbarStack>
      {notifications.map((item) => (
        <PageSnackbar
          key={JSON.stringify(item)}
          severity={item.severity}
          title={item.message}
          open={true}
          showIcon
        />
      ))}
    </PageSnackbarStack>
  )
}

export default Notify