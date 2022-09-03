type FC<T = {}> = TestProps<T>;

interface TestProps<T = {}> {
    name?: string;
    data?: T;
}

// const test: FC<{surname: string,test: number}> = {
//     name: 'test',
//     data: {
//         surname: "test",
//         test: 5
//     }
// }
