// problem link: https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem=1520

import java.math.BigInteger;
import java.util.Scanner;

class Main {
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        
        BigInteger fib[] = new BigInteger[4791];
        BigInteger a = fib[0] = BigInteger.valueOf(1);
        BigInteger b = fib[1] = BigInteger.valueOf(1);
        
        int i = 2;
        for(;i<4790;i++){
            fib[i] = a.add(b);
            a = b;
            b = fib[i];
        }
        
        while(scanner.hasNext()){
            i = scanner.nextInt();
            System.out.println(fib[i-1]);
        }

        
    }
}
