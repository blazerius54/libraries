import { OPEN_DATA } from './helpers';

export const getLibrariesData = () => fetch(OPEN_DATA).then((response) => response.json());
