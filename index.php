 <?php

$title = "Home";
$content = '<h3>Vadovo informacija</h3>
<p>
<table border="1">
    <thead>
        <tr>
            <th>
                Įmonės pavadinimas:
            </th>         
            <th>
                "Sestas aukstas"
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Vadovas:
            </td>
            <td>
                Jonas Petraitis
            </td>
        </tr>
        <tr>
            <td>
                Vadovo tel. Nr.:
            </td>
            <td>
                861111111
            </td>
        </tr>
        <tr>
            <td>
                Vadovo el. paštas:
            </td>
            <td>
                jonpet@gmail.com
            </td>
        </tr>
        <tr>
            <td>
                Darbuotojų skaičius:
            </td>
            <td>
                3
            </td>
        </tr>       
    </tbody>
</table>

</p>';

include 'Template.php';
        
require("config.php");

?>



