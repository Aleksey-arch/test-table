import * as React from 'react'

import classes from './index.module.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { WORKERS_DATA, WORKERS_TABLE_COLUMNS } from "./constants"

export const WorkersTable = () => {

  const table = useReactTable({
    data: WORKERS_DATA,
    columns: WORKERS_TABLE_COLUMNS,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className={classes.container}>
      <table className={classes.table}>
        <thead className={classes.thead}>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className={classes.headerGroup}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className={classes.header}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
						
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className={classes.row}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className={classes.cell}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


