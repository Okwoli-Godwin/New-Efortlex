"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/Ui/table"
import { Input } from "../../../components/Ui/input"
import { Button } from "../../../components/Ui/button"
import { Badge } from "../../../components/Ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../components/Ui/dropdown-menu"
import { Search, Filter, X, Plus, MoreHorizontal, ChevronDown } from "lucide-react"
import { RiCloseFill } from "react-icons/ri";

const statusColor = {
  AVAILABLE: { color: "text-green-700", bg: "bg-green-100" },
  RENTED: { color: "text-red-700", bg: "bg-red-100" },
  SCHEDULED: { color: "text-yellow-700", bg: "bg-yellow-100" },
}

type Property = {
  name: string
  location: string
  type: string
  rentAmount: number
  status: keyof typeof statusColor
  tenants: number
}

const dummyData: Property[] = [
  {
    name: "Godwin Apartments",
    location: "Lagos, Nigeria",
    type: "2 Bedroom",
    rentAmount: 400000,
    status: "AVAILABLE",
    tenants: 0,
  },
  {
    name: "Godwin Apartments",
    location: "Lagos, Nigeria",
    type: "2 Bedroom",
    rentAmount: 400000,
    status: "AVAILABLE",
    tenants: 0,
  },
  {
    name: "Godwin Apartments",
    location: "Lagos, Nigeria",
    type: "2 Bedroom",
    rentAmount: 400000,
    status: "AVAILABLE",
    tenants: 0,
  },
  // Add more dummy data as needed
]

export default function PropertiesTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState<string[]>([])

  const addFilter = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter))
  }

  const clearFilters = () => {
    setFilters([])
  }

  return (
    <div className="w-full mt-10 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Property details</h2>
        <Button className="bg-white text-purple-700 border border-purple-700 hover:bg-purple-50">
          <Plus className="mr-2 h-4 w-4" /> Add new property
        </Button>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative w-[370px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search by name..."
              className="pl-8"
              value={searchTerm}
              onChange={(e: any) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Filter by</span>
          </div>
          {["Dates", "Status"].map((item) => (
            <DropdownMenu key={item}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-24">
                  {item} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => addFilter(item)}>Option 1</DropdownMenuItem>
                <DropdownMenuItem onClick={() => addFilter(item)}>Option 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>

        {filters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Badge key={filter} variant="secondary" className="text-sm">
                {filter}
                <X className="ml-1 h-3 w-3 cursor-pointer" onClick={() => removeFilter(filter)} />
              </Badge>
            ))}
            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm">
              Clear all
            </Button>
          </div>
        )}
      </div>

      <div className="w-[100%] flex items-center mt-[10px]">
                <div className='pl-[10px] pr-[10px] pt-[3px] flex items-center pb-[3px] border border-[#8F8F8F] rounded-[3px]'>
                  <h3 className='text-[12px]'>All</h3>
                  <RiCloseFill className='ml-[3px]' />
                </div>
                <div className='pl-[10px] pr-[10px] pt-[3px] ml-[10px] flex items-center pb-[3px] border border-[#8F8F8F] rounded-[3px]'>
                  <h3 className='text-[12px]'>ISO 27001</h3>
                  <RiCloseFill className='ml-[3px]' />
                </div>
                <div className='pl-[10px] pr-[10px] pt-[3px] ml-[10px] flex items-center pb-[3px] border border-[#8F8F8F] rounded-[3px]'>
                  <h3 className='text-[12px]'>Draft</h3>
                  <RiCloseFill className='ml-[3px]' />
                </div>
                <div className='pl-[10px] pr-[10px] pt-[3px] ml-[10px] flex items-center pb-[3px] rounded-[3px]'>
                  <h3 className='text-[12px]'>Clear</h3>
                  <RiCloseFill className='ml-[3px]' />
                </div>
              </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-[200px]">Property Name</TableHead>
              <TableHead>Apartment Location</TableHead>
              <TableHead>Apartment Type</TableHead>
              <TableHead>Rent Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Tenants</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyData.map((property, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{property.name}</TableCell>
                <TableCell>{property.location}</TableCell>
                <TableCell>
                    <div className="w-[100px] h-[22px] rounded-md flex justify-center items-center bg-[#EDDFFF] text-[#5C00B2] font-[500]">
                        {property.type}
                    </div>
                </TableCell>
                <TableCell>₦ {property.rentAmount.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge className={`${statusColor[property.status].bg} ${statusColor[property.status].color}`}>
                    {property.status.toLowerCase()}
                  </Badge>
                </TableCell>
                <TableCell>{property.tenants}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}