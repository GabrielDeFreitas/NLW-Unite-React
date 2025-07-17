import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import { IconButton } from "../icon-button";
import { Table } from "../table";
import { useState, type ChangeEvent } from "react";
import { attendees } from "../../data/attendee-list";

export function AttendeeList() {
    const [inputValue, setInputValue] = useState('')
    const [page, setPage] = useState(1);
    const totalPage = Math.ceil(attendees.length / 10)
    const onSearchInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    const goToPreviousPage = () => {
        setPage(page - 1)
    }
    const goToNextPage = () => {
        setPage(page + 1)
    }
    const goToLastPage = () => {
        setPage(totalPage)
    }
    const goToFirstPage = () => {
        setPage(1)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input onChange={onSearchInputSearch} className="bg-transparent flex-1 outline-none" type="text" placeholder="Buscar participantes..." />
                </div>
            </div>

            <pre className="py-8">event.target.value: {inputValue}</pre>

            <Table.Root>
                <thead>
                    <Table.Row>
                        <Table.Header>
                            <input className="cursor-pointer size-4 bg-black/20 rounded border border-white/10 accent-nlw-orange" type="checkbox" name="" id="" />
                        </Table.Header>
                        <Table.Header>Código</Table.Header>
                        <Table.Header>Participantes</Table.Header>
                        <Table.Header>Data de inscrição</Table.Header>
                        <Table.Header>Data do check-in</Table.Header>
                        <Table.Header style={{ width: 64 }} className="py-3 px-4 text-sm font-semibold text-left"></Table.Header>
                    </Table.Row>
                </thead>
                <tbody>
                    {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
                        return (
                            <Table.Row key={`key-${attendee.id}`} id={`id-${attendee.id}`} className="hover:bg-white/5">
                                <Table.Cell>
                                    <input className="cursor-pointer size-4 bg-black/20 rounded border border-white/10 accent-nlw-orange" type="checkbox" name="" id="" />
                                </Table.Cell>
                                <Table.Cell>{attendee.id}</Table.Cell>
                                <Table.Cell>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white">{attendee.name}</span>
                                        <span>{attendee.email}</span>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>{attendee.createdAt.toISOString()}</Table.Cell>
                                <Table.Cell>{attendee.checkedInAt.toISOString()}</Table.Cell>
                                <Table.Cell>
                                    <IconButton icon={MoreHorizontal} className="bg-black/20" />
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <Table.Cell colSpan={3} className="font-semibold text-left">
                            <span>Mostrando 10 de {attendees.length} items</span>
                        </Table.Cell>
                        <Table.Cell colSpan={3} className="font-semibold text-right">
                            <div className="inline-flex items-center gap-8">
                                <span>Página {page} de {totalPage}</span>
                                <div className="flex gap-1.5">
                                    <IconButton icon={ChevronsLeft} onClick={goToFirstPage} disabled={page === 1} />
                                    <IconButton icon={ChevronLeft} onClick={goToPreviousPage} disabled={page === 1} />
                                    <IconButton icon={ChevronRight} onClick={goToNextPage} disabled={page === totalPage} />
                                    <IconButton icon={ChevronsRight} onClick={goToLastPage} disabled={page === totalPage} />
                                </div>
                            </div>
                        </Table.Cell>
                    </tr>
                </tfoot>
            </Table.Root>
        </div>
    )
}