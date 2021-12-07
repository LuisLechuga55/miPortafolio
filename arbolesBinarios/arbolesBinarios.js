'use strict'

class Nodo {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class ArbolBinario {
    constructor() {
        this.root = null
    }

    insertar(value) {
        //Construir el nuevo nodo a agregar
        const nodoNuevo = new Nodo(value, null, null);

        //Valida que la raiz no este vacia
        if (!this.root) {
            this.root = nodoNuevo;
        } 
        
        else {
            
            let nodoActual = this.root;
            let bandera = false;

            while (!bandera) {

                if (value === nodoActual.value) {
                    bandera = true;
                }

                if (value !== nodoActual.value) {
                    
                    if (value < nodoActual.value) {
                        if (!nodoActual.value) {
                            if (!nodoActual.left) {
                                nodoActual.left = nodoNuevo
                                bandera = true
                            } else {
                                nodoActual = nodoActual.left;

                            }
                        }
                    }

                    if (value > nodoActual.value) {
                        if (!nodoActual.right) {
                            nodoActual.right = nodoNuevo
                            bandera = true

                        } else {
                            nodoActual = nodoActual.right;
                        }
                    }
                }
            }
        }
    }

    print() {
        console.log('this.root ', this.root);
    }

}

const arbolBinario = new ArbolBinario;

arbolBinario.insertar(50);
arbolBinario.insertar(55);
arbolBinario.print();