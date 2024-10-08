import {
  createColumnHelper,
} from '@tanstack/react-table'
export const WORKERS_DATA = [
  {
		avatar: require('../../image/1.png'),
    employee: 'Кузьмин Павел',
    shifts: 7,
    clients: 12,
    earned: '12900₽',
    sold: 30,
  },
  {
		avatar: require('../../image/2.png'),
    employee: 'Гнебеда Андрей',
    shifts: 5,
    clients: 20,
    earned: '19650₽',
    sold: 12,
  },
  {
		avatar: require('../../image/3.png'),
    employee: 'Копосов Петр',
    shifts: 7,
    clients: 21,
    earned: '12900₽',
    sold: 25,
  },
  {
		avatar: require('../../image/4.png'),
    employee: 'Борисов Сергей',
    shifts: 7,
    clients: 18,
    earned: '12900₽',
    sold: 32,
  },
]
const columnHelper = createColumnHelper()
export const WORKERS_TABLE_COLUMNS = [
  columnHelper.accessor('employee', {
		header: () => 'Сотрудники',
    cell: info => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={info.row.original.avatar} alt={info.getValue()} style={{ width: '54px', height: '54  px', marginRight: '14px', borderRadius: "17px" }} />
        {info.getValue()}
      </div>
    ),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('shifts', {
    header: () => 'Кол-во смен',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('clients', {
    header: () => 'Клиентов',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('earned', {
    header: () => 'Заработано',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('sold', {
    header: () => 'Продано',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
]