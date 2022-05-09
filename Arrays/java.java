package Arrays;

public class java {
    public static void main(String[] args) {
        int numero = 15;
        int count = 1;
        boolean primos = true;
        int descompuesto[] = new int[2];

        do {

            for (int i = 1; i < count; i++) {
                for (int j = 2; j < count; j++) {
                    if (numero % j == 0) {
                        primos = false;
                    }
                }

                if (primos && numero % i == 0) {
                    numero = numero / i;
                    descompuesto[count - 1] = i;
                }
            }
            count++;
        } while (numero > count);
        System.out.println(descompuesto[0] + " " + descompuesto[1]);
    }
}