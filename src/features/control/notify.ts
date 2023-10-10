import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'features/store'

export enum SeverityType {
  ERROR = 'error',
  SUCCESS = 'success',
}

export type NotifyDataItem = object | string | number | boolean

export type NotifyData = NotifyDataItem | Array<NotifyDataItem>

export type Notify = {
  severity: SeverityType
  message: string
  data?: NotifyData
}

export const slice = createSlice({
  name: 'control/notify',
  initialState: <Array<Notify>>[],
  reducers: {
    enq: (state, action: PayloadAction<Notify>) => [...state, action.payload],
    deq: (state) => state.slice(1),
  },
})

export const { enq, deq } = slice.actions

export const notifySelector = (state: RootState): Array<Notify> => state.notify

export default slice
