// problem link https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=2&category=194&page=show_problem&problem=1161

import java.math.BigInteger;
import java.util.Scanner;

class Main {
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        
        BigInteger fact[] = new BigInteger[1001];
        BigInteger a = fact[0] = BigInteger.valueOf(1);
        BigInteger b = fact[1] = BigInteger.valueOf(1);
        
        long result[] = new long[1001];
        result[0] = 1;
        result[1] = 1;
        
        int i=2,j=0,d;
        long sum;
        String s;
        
        
        
        for(;i<1001;i++){
            fact[i] = b.multiply(BigInteger.valueOf(i));
            b = fact[i];
            
            s = String.valueOf(fact[i]);
            sum = 0;
            for(j=0;j<s.length();j++){
                d = Character.getNumericValue(s.charAt(j));
                sum+=d;
            }
            result[i] =sum;
            
        }
        
        
        
        while(scanner.hasNext()){
            i = scanner.nextInt();
            System.out.println(result[i]);
        }

        
    }
}
