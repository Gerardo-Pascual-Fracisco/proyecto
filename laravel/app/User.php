<?php
namespace App;
 
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
 
class User extends Authenticatable
{

    
    protected $table = "users";
      protected $primaryKey = 'user_id';
    use HasApiTokens, Notifiable;
 
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'user_id', 'foto','username'
    ];
 
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    
    public function sales()
    {
        return $this->hasMany('App\Sale', 'id', 'id');
    }
    
 
   

    public function services()
    {
        return $this->belongsToMany('App\Service','user_id,','user_id');
    }
    
}


