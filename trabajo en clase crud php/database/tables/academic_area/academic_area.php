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

    public function getAll(){
        try {
            $stm = $this->dbCnx;
            $stm->prepare("SELECT * FROM academic_area");
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC); //devuelve arrays asociativos
        } catch (PDOException $e){
            $this->dbCnx=$e->getMessage();
        }
    }
    public function insert(){
        try {
            $stm = $this->dbCnx;
            $stm->prepare("INSERT INTO academic_area (id, id_area, id_staff, id_position, id_journey) VALUES (?,?,?,?,?)");
            $stm->execute(array($this->id, $this->area, $this->staff, $this->position, $this->journey)); 
        } catch (PDOException $e){
            $this->dbCnx=$e->getMessage();
        }
    }

    public function update() {
        try {
            $stm = $this->dbCnx;
            $stm->prepare("UPDATE academic_area SET id = ?, id_area = ?, id_staff = ?, id_position = ?, id_journey = ?");
            $stm->execute([$this->id, $this->area, $this->staff, $this->position, $this->journey]);
        } catch (PDOException $e){
            $this->dbCnx=$e->getMessage();
        }
    }

    public function delete(){
        try {
            $stm = $this->dbCnx;
            $stm->prepare("DELETE FROM academic_area WHERE id = ?");
            $stm->execute([$this->id]);
        } catch (PDOException $e){
            $this->dbCnx=$e->getMessage();
        }
    }
    

 }