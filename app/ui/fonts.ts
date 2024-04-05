/**
 * All fonts used in this application are define in this section. 
 * The steps are : 
 * 
 * 1 -- Import the font from next/font
 * 2 -- Configure the font imported
 * 3 -- Use it like wanted
 */

import { Inter } from 'next/font/google'; 
import { Lusitana } from 'next/font/google'; 

export const inter = Inter({
    subsets : ['latin']
}); 

export const lusitana = Lusitana({
    subsets : ['latin'], 
    weight : ['400', '700']
});