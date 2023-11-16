
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any) {
    return a + b;
}

add("first", "second");
add(1, 2);
add(true, false);
