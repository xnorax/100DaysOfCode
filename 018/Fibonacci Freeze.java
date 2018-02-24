// problem link: https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem=436

import java.math.BigInteger;
import java.util.Scanner;

class Main {
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
 
        BigInteger fib[] = new BigInteger[5001];
        BigInteger a = fib[0] = BigInteger.valueOf(0);
        BigInteger b = fib[1] = BigInteger.valueOf(1);
        
        int i=2;
        
        for (;i<5001;i++){
            fib[i] = a.add(b);
            a = b;
            b = fib[i];
        }
        
        while(scanner.hasNext()){
            i=scanner.nextInt();
            System.out.println("The Fibonacci number for " + i+" is "+fib[i]);
        }

        
    }
}
