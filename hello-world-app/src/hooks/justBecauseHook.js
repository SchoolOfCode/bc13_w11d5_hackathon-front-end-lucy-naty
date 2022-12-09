import {useState} from 'react';

export default function useJustBecauseHook(){

const [searchTerm, setSearchTerm] = useState()

return [searchTerm, setSearchTerm]
}