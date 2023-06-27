 <?php
 require_once '../../dbCnx.php';

 class AcademicArea extends Conectar {
    //todos son id's :)
    private $id;
    private $area;
    private $staff;
    private $position;
    private $journey;

    public function __construct($id=0, $area=0, $staff=0, $position=0, $journey=0, $dbCnx=""){
        $this->id = $id;
        $this->area = $area;
        $this->staff = $staff;
        $this->position = $position;
        $this->journey = $journey;
        parent::__construct($dbCnx);
    }

    

 }