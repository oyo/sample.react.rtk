import { SeverityType, deq, enq } from 'features/control/notify'
import { store } from 'features/store'

const NOTIFY_TIME = 7000

const NotifyService = {
  notify: (severity: SeverityType, message: string) => {
    store.dispatch(enq({ time: new Date(), severity, message }))
    setTimeout(() => store.dispatch(deq()), NOTIFY_TIME)
  },
  success: (message: string) => NotifyService.notify(SeverityType.SUCCESS, message),
  error: (message: string) => NotifyService.notify(SeverityType.ERROR, message),
}

export const { notify, success, error } = NotifyService

export default NotifyService
