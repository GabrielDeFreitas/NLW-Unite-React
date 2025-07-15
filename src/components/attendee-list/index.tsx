import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import { IconButton } from "../icon-button";
import { Table } from "../table";

export function AttendeeList() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input className="bg-transparent flex-1 outline-none" type="text" placeholder="Buscar participantes..." />
                </div>
            </div>

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
                    {Array.from({ length: 6 }).map((_, index) => {
                        return (
                            <Table.Row id={`tr-${index}`} className="hover:bg-white/5">
                                <Table.Cell>
                                    <input className="cursor-pointer size-4 bg-black/20 rounded border border-white/10 accent-nlw-orange" type="checkbox" name="" id="" />
                                </Table.Cell>
                                <Table.Cell>123456</Table.Cell>
                                <Table.Cell>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white">Placeholder placeholder</span>
                                        <span>placeholder@lorem.com</span>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>7 dias atrás</Table.Cell>
                                <Table.Cell>12 dias atrás</Table.Cell>
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
                            <span>Mostrando 10 de 228 items</span>
                        </Table.Cell>
                        <Table.Cell colSpan={3} className="font-semibold text-right">
                            <div className="inline-flex items-center gap-8">
                                <span>Página 1 de 23</span>
                                <div className="flex gap-1.5">
                                    <IconButton icon={ChevronsLeft} />
                                    <IconButton icon={ChevronLeft} />
                                    <IconButton icon={ChevronRight} />
                                    <IconButton icon={ChevronsRight} />
                                </div>
                            </div>
                        </Table.Cell>
                    </tr>
                </tfoot>
            </Table.Root>
        </div>
    )
}